import React from 'react'


const Home = () => {
    return (
        <div>
        {/* // style= {{display: 'flex', justifyContent:'center', alignItems: 'center',
        // height: '500vh'}}> */}
            
            <img className='picture' src={process.env.PUBLIC_URL + '/images/basketball-net.jpg'} /> 
         
        </div>
    )
}

export default Home
