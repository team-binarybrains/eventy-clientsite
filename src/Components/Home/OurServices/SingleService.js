
import { useParams } from 'react-router-dom'
import Venues from '../Venues/Venues'
import useFetch from './Hook/useFetch'

function SingleService() {

    const { id } = useParams()
    // const [serviceDetails, setServiceDetails] = useState({})
    // console.log(serviceDetails);
    const details = useFetch(`http://localhost:5000/single-service/${id}`, {})

    const { eventName, image, description, eventPrice } = details
    // console.log(eventName.split(' '));

    const name = eventName?.split(' ');
    console.log(name);

    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white">
                        <p className="tracking-[8px] uppercase">ALL YOU NEED TO KNOW About this service</p>
                        <p className="text-6xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-4 uppercase">{name && name[0]}</span>
                            <span className="font-normal tracking-wide uppercase">{name && name[1]}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-200'>
                <div class="lg:flex justify-around max-w-7xl mx-auto py-14 lg:flex-row-reverse">
                    <div className='flex justify-center w-full'> 
                        <img src={image} class=" shadow-2xl" alt='' />
                    </div>
                    <div className='grid justify-center items-center w-full '>
                        <p class="text-xl w-[600px]">
                            <span className='text-4xl font-semibold font-serif -ml-2'>{description?.slice(0,1)}</span>
                            <span className='-ml-1'>{description?.slice(1)}</span>
                        </p>
                        <p className='text-3xl font-semibold'>Price: ${eventPrice}</p>
                    </div>
                </div>
            </div>

            <Venues></Venues>

        </div>
    )
}

export default SingleService
