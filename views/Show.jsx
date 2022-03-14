const React = require('react')

class Show extends React.Component {
  render(){
    const plant = this.props.plant
    return (
        <div>
        {/* <link rel="stylesheet" href="/css/app.css" /> */}
            <h1>Plants Show Page</h1>
            <ul>
                <li>
                {plant.name.charAt(0).toUpperCase() + plant.name.slice(1)}: {plant.care} <br></br>
                Type: {plant.type} <br></br>
                ${plant.price} 

                <div id="img"> 
                <img src = {`${plant.img}`} height = "160px" width = "160px"></img> 
                </div> <br></br>
                There are {plant.qty} in stock!! <br></br>
                The {plant.name} is {plant.petSafe ? ' pet friendly!' : ' NOT pet friendly!'}
                </li>
            </ul>
        </div>
    )
  }
}

module.exports = Show