import {Component} from 'react'
import Loader from 'react-loader-spinner'
import FilterItem from '../LanguageFilterItem'
import CardItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const cons = {
  success: 'success',
  fail: 'fail',
}

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    List: [],
    toggle: cons.success,
    togg1: false,
    set: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.fetch1()
  }

  fetch1 = async () => {
    const {set} = this.state
    const Api = `https://apis.ccbp.in/popular-repos?language=${set}`
    

    const get = await fetch(Api)

    if (get.ok === true) {
      const data = await get.json()

      const format = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({List: format, togg1: true})
    }
    if (get.status === 502) {
      this.setState({toggle: cons.fail})
    }
  }

  update = id => {
    this.setState({set: id, togg1: false}, this.fetch1)
  }

  Loader = () => {
    const {toggle} = this.state

    return (
      <div data-testid="loader">
        <Loader
          type="ThreeDots"
          data-testid="loader"
          color="#0b69ff"
          height="50"
          width="50"
        />
      </div>
    )
  }

  failure = () => {
    const {set, togg1} = this.state
    return (
      <div className="main">
        <h1 className="h1">Popular</h1>
        <ul className="lisbtn">
          {languageFiltersData.map(each => (
            <FilterItem
              tabItem={each}
              key={each.id}
              click={this.update}
              tg={each.id === set}
            />
          ))}
        </ul>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure-view"
          className="error"
        />
        <h1>Something Went Wrong</h1>
      </div>
    )
  }

  main = () => {
    const {List, set, togg1} = this.state
    return (
      <div className="main">
        <h1 className="h1">Popular</h1>
        <ul className="lisbtn">
          {languageFiltersData.map(each => (
            <FilterItem
              tabItem={each}
              key={each.id}
              click={this.update}
              tg={each.id === set}
            />
          ))}
        </ul>
        {togg1 ? (
          <ul className="lisbtn">
            {List.map(each => (
              <CardItem Cards={each} key={each.id} />
            ))}
          </ul>
        ) : (
          this.Loader()
        )}
      </div>
    )
  }

  render() {
    const {toggle} = this.state
    console.log(toggle)

    switch (toggle) {
      case cons.success:
        return this.main()

      case cons.fail:
        return this.failure()

      default:
        return null
    }
  }
}
export default GithubPopularRepos
