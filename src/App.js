import React, { Component } from 'react';
import SearchForm from './SearchForm'
import RepositoryList from './RepositoryList'
import Details from './Details'
import './app.css'
import axios from 'axios'

class App extends Component {

  state={
    username:'',
    searchSuccess: null,
    searching: false,
    repositories:{},
    filteredRepos:[],
    repoDetails: [],
    showDetails: false,
    stars:0,
    forks:0,
    priLang:''
  }
  showDetails=(name)=>{
    
    this.setState((prev)=>{
      let newstate={ ...prev }
      let repo=newstate.filteredRepos.filter((val)=>{
        return (val.name===name)
      })
      newstate.showDetails=true
      return newstate
    })
  }

  filter =(lang)=>{
    if(lang === 'All'){
      this.setState((prev)=>{
      let newstate={ ...prev }
      newstate.filteredRepos = Object.assign(newstate.repositories)
      return newstate
    })
    }else{
      this.setState((prev)=>{
      let newstate={ ...prev }
      newstate.filteredRepos = newstate.repositories.filter((val)=>{
        return (val.language === lang)
      })
      return newstate
    })
    }  
  }
  updateUN=(un)=>{
    this.setState((prev)=>{
      let newstate = { ...prev }
      newstate.username=un
      return newstate
    })
  }

  fetchRepos=()=>{
    

    this.setState((prev)=>{
      let newstate={ ...prev }
      newstate.searching=true
      newstate.repositories=[]
      newstate.languages=[]
      return newstate
    })
    axios.get(`https://api.github.com/users/${this.state.username}/repos`)
      .then((response)=>{
        this.setState((prev)=>{
          console.log(`in success`)
          let newstate={ ...prev }
          newstate.searching=false
          newstate.searchSuccess=true
          response.data.forEach((val)=>{
            newstate.repositories = Object.assign(response.data)
            newstate.filteredRepos = Object.assign(response.data)
          })//forEach
          return newstate
        })//setstate
      })
      .catch((err)=>{
        this.setState((prev)=>{
          let newstate={ prev }
          newstate.searchSuccess=false
          newstate.searching=false
          return newstate
        })
      })
  }

  render() {
    let repoList, repoDetailsDisp, searchDisp
    if(this.state.showDetails===false){
      repoDetailsDisp=(<div></div>)
    }else{
      repoDetailsDisp=(<div><Details state={this.state} /></div>)
    }

      if(!this.state.searchSuccess){
        repoList=<div></div>
      }else{
        repoList=<RepositoryList  state={this.state} filter={this.filter} showDetails={this.showDetails} />
      }

      if(this.state.showDetails===false){
        searchDisp=(<div>
          <h1>Github viewer</h1>
        <hr />
        <SearchForm state={this.state} updateUN={this.updateUN} fetchRepos={this.fetchRepos}  />
        {repoList}</div>
        )
        
      }else{
        searchDisp=<div></div>
      }


    return (
      <div className="App">
        
        {searchDisp}
        {repoDetailsDisp}
      </div>
    );
  }
}

export default App;
