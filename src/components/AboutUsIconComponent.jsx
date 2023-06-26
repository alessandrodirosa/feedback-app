import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export const AboutUsIconComponent = () => {
    return (
        <div className='about-link'>
            <Link to={'/about-us'}>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}
