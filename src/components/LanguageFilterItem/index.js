// Write your code here
import './index.css'

const FilterItem = props => {
  const {tabItem, click, tg} = props
  const {id, language} = tabItem
  const sp = tg ? 'special' : 'btn'

  const putitems = () => {
    click(id)
  }

  return (
    <li className="lis">
      <button type="button" onClick={putitems} className={sp}>
        {language}
      </button>
    </li>
  )
}

export default FilterItem
