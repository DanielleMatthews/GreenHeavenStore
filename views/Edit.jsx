const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{

    render() {
        return (
            <DefaultLayout title="Edit Page">      
                <link rel="stylesheet" href="/css/app.css" />

                <form action = {`/plants/${this.props.plant._id}?_method=PUT`} method = "POST">
                Name: <input type="text" name="name" defaultValue={this.props.plant.name}/> <br/>
                Type: <input type="text" name="type"defaultValue={this.props.plant.type}/> <br/>
                Image Link: <input type="text" name="img" defaultValue={this.props.plant.img}/> <br/>
                Price: <input type="text" name="price" defaultValue={this.props.plant.price}/> <br/>
                Stock: <input type="text" name="qty" defaultValue={this.props.plant.qty}/> <br/>
                Pet Friendly: 
                    { this.props.plant.petFriendly? <input type="checkbox" name="petFriendly" defaultChecked />: <input type="checkbox" name="petFriendly"/> } <br/>

                <input type="submit" value="Submit Changes"/>
                </form>
            </DefaultLayout>
        )
    }
}
module.exports= Edit