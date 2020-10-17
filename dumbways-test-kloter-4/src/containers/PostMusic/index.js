import React, {Component, Fragment} from 'react';
import API from '../../services/index';
import './PostMusic.css';

class PostMusic extends Component {
    state = {
        title: '',
        durasi: '',
        deskripsi: '',
        photo: '',
        deskripsi: '',
        option_genre: [],
        option_singer: []
    }

    handleSavePost = () => {
        const data = {
            title: this.state.title,
            durasi: this.state.durasi,
            deskripsi: this.state.deskripsi,
            photo: this.state.photo,
            id_singer: this.state.id_singer,
            id_genre: this.state.id_genre
        }
        API.postMusic(data)
        .then(this.setState({
                title: '',
                durasi: '',
                deskripsi: '',
                photo: ''
            })
        )
    }

    onInputChange = (e, type) => {
        this.setState ({
            [type]: e.target.value
        })
    }

    getPostAPI = () => {
        API.get_GenreId()
        .then(result => {
            this.setState({
                option_genre: result
            })
        })
        API.get_SingerId()
        .then(result2 => {
            this.setState({
                option_singer: result2
            })
        })
    }

    componentDidMount() {    
        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <div className="input-form">
                    <p className="title">INPUT NEW MUSIC</p>

                    <p className="input-title">Title</p>
                    <input type="text" value={this.state.title} placeholder="input title" onChange={(e) => this.onInputChange(e, 'title')}/>
                    
                    <p className="input-image">Durasi</p>
                    <input type="text" value={this.state.durasi} onChange={(e) => this.onInputChange(e, 'durasi')} />
                    
                    <p className="input-date">Genre</p>
                    <select onChange={(e) => this.onInputChange(e, 'id_genre')}>
                        <option value="none" selected disabled hidden>Choose Genre</option>
                        {
                        this.state.option_genre.map(post => {
                            return (
                            <option key={post.id} value={post.id} >{post.name}</option>
                            )
                        })
                    }
                    </select>

                    <p className="input-date">Singer</p>
                    <select onChange={(e) => this.onInputChange(e, 'id_singer')}>
                        <option value="none" selected disabled hidden>Choose Singer</option>
                        {
                        this.state.option_singer.map(post => {
                            return (
                            <option key={post.id} value={post.id} >{post.name}</option>
                            )
                        })
                    }
                    </select>

                    <p className="input-title">Photo</p>
                    <input type="text" value={this.state.photo} placeholder="input photo" onChange={(e) => this.onInputChange(e, 'photo')}/>

                    <p className="input-deskripsi">Deskripsi</p>
                    <textarea placeholder="input deskripsi" value={this.state.deskripsi} onChange={(e) => this.onInputChange(e, 'deskripsi')}/>
                    
                    <hr/>
                    <div className="btn-center">
                        <button onClick={this.handleSavePost}>SIMPAN</button>
                    </div>
                    
                </div>
            </Fragment>
            
        )
    }
}

export default PostMusic;