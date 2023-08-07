import TinderCard from 'react-tinder-card'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import ChatContainer from '../components/ChatContainer'
import {useCookies} from 'react-cookie'



const Dashboard = () => {
    const characters = [
        {     
            name: 'Tiger Woods',
            url: "https://ca-times.brightspotcdn.com/dims4/default/2ed3f56/2147483647/strip/false/crop/3504x2336+0+0/resize/1486x991!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff1%2F5b%2F161d1a6f4981b36cb9399fe7d665%2Fsd-photos-1staff-kc-2008-open-kca-005.JPG"        },
        { 
            name: 'Phil Mickelson',
            url: 'https://e2.365dm.com/23/08/1600x900/skysports-phil-mickelson-open_6238790.jpg'
        },
        {
            name: 'Bryson DeChambeau',
            url: 'https://e0.365dm.com/23/08/768x432/skysports-bryson-dechambeau_6242784.jpg?20230806204740'
        },
        {
            name: 'Rory McIlroy',
            url: 'https://focus.belfasttelegraph.co.uk/thumbor/MdOZysjT3J-_uoPH83Lrc173WQM=/960x640/smart/prod-mh-ireland/09bc1e38-9276-11ed-aff1-0210609a3fe2'
        },
        {
            name: 'Jordan Spieth',
            url: 'https://s.abcnews.com/images/Sports/ap_jordan_spieth_ds_150412_16x9_1600.jpg'
        },
        {
            name: 'Justin Thomas',
            url: 'https://thespun.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTk5ODk2MTk2MDkxNzUwMDE2/thomas.jpg'
        },
        {
            name:  'Collin Morikawa',
            url: 'https://golf.com/wp-content/uploads/2020/08/collinmorikawa-scaled.jpg'
        },
        {
            name: 'Dustin Johnson',
            url: 'https://pagesix.com/wp-content/uploads/sites/3/2021/05/50721-paulina-gretzky-dustin-johnson-1.jpg?quality=75&strip=all'
        },
       
        {
            name: 'Jon Rahm',
            url: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk5NTE1MTA2MDU5NDk1MDQw/gettyimages-1560139149.jpg'
        },
        {
            name: 'Brooks Koepka',
            url:  'https://nypost.com/wp-content/uploads/sites/2/2023/04/NYPICHPDPICT000009311483.jpg?quality=75&strip=all' 
           },
    ]

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    const [people, setPeople] = useState(characters)

    return (
        <>
            <Nav/>
            
        <div className='dashboard'>
            <div className='chat-container'>
               chat container
            </div>
            <div className='swiper-container'>
                <div className='card-container'>

                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
        </div>
        </>
    )
}

export default Dashboard