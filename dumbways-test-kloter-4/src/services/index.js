import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete'

//POST
const postMusic = (data) => Post('post/music', data);
const postGenre = (data) => Post('post/genre', data);
const postSinger = (data) => Post('post/singer', data);

//PUT
const updateMusic = (data, id) => Put(`update/${id}`, data);

// //DELETE
const deleteMusic = (id) => Delete(`${id}`);
// const deleteProduct = (id) => Delete(`api/delete/${id}`);

// //GET
const getMusic = () => Get('post');
const getMusicDetail = (id) => Get(`detail/${id}`);
const getMusicFilter = (id) => Get(`genre/${id}`);
const getSingerFilter = (id) => Get(`singer/${id}`);
const get_GenreId = () => Get('post/getGenreId');
const get_SingerId = () => Get('post/getSingerId');
const getUpdate = (data, id) => Put(`update/${id}`, data);
// const getComments = () => Get('comments');

const API = {
    postSinger,
    postGenre,
    postMusic,
    get_GenreId,
    get_SingerId,
    getMusic,
    deleteMusic,
    getMusicDetail,
    getMusicFilter,
    getSingerFilter
}

export default API;
