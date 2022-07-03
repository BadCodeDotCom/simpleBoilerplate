import './simpleNews.css';

const SimpleNews = () => {

    const dateNews = new Date(2022, 7, 3);

    return (
        <div className="center">
        <div className="simple-news-item">
            <div className="latest-news-form">
            <h2>Latest news</h2>
            <div>{dateNews.toISOString()}</div>
            </div>
            <div className="input">
            <input type="text"/>
            <div/>
                <div className="button">
                <button className="button">
                    Search news
                </button>
                </div>
            </div>
    </div>
        </div>
    );
}

export default SimpleNews;
