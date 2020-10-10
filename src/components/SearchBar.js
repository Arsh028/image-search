import React from 'react';

export class SearchBar extends React.Component {
    state = {term : ""};

    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui form">
                        <label>Search bar</label>
                        <input 
                            onChange={(event) => this.setState({term : event.target.value})} 
                            value = {this.state.term}
                            type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
