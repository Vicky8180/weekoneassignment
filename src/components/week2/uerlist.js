class AllUserList extends Component {
    state = {
            name: "Priyanshu",
        };
        setStateName = (name) => {
            this.setState({...this.state, name});
        };
        componentDidMount() {
            console.log("all user list was mounted")
        }
        render () {
         return (
            <div>
                {/* <h1>The name is {state.name}</h1> */}
                <Test name ={state.name} setName={setStateName} />
                {allUsers.map((user,index) => (
                    <UserDetails key={index} user={user} />
                ))}
            </div>
         );
        
        };

}