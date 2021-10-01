import React from 'react'


const Home = () => {
    return (
        <div style= {{display: 'flex', justifyContent:'center', alignItems: 'center',
        height: '90vh'}}>
            <h1>Home</h1>
            <img src={process.env.PUBLIC_URL + '/images/basketball-net.jpg'} /> 
          {/* <img src={logo} alt="" />   */}
        </div>
    )
}

export default Home
