import Article from './Article'
import { shallow, mount} from 'enzyme'

describe('Article test', () => {

  it('should render without crashing', () => {
    const wrapper = shallow(Article)

  })
})