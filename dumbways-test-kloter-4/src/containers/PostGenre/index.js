import React, {Component} from 'react';
import API from '../../services/index';
import './PostGenre.css';

class PostGenre extends Component {
    state = {
        name: '',
    }

    handleSavePost = () => {
        const data = {
            name: this.state.name,
        }
        API.postGenre(data)
        .then(this.setState({
                name: '',
            })
        )
    }

    onInputChange = (e, type) => {
        this.setState ({
            [type]: e.target.value
        })
    }

    render() {
        return (
            <div className="input-form">
                <p className="title">INPUT NEW GENRE</p>

                <p className="input-title">Genre Name</p>
                <input type="text" value={this.state.name} placeholder="input name" onChange={(e) => this.onInputChange(e, 'name')}/>
                
                <hr/>
                <div className="btn-center">
                    <button onClick={this.handleSavePost}>SIMPAN</button>
                </div>
                
            </div>
        )
    }
}

export default PostGenre;