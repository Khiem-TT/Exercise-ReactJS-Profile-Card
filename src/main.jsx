import ReactDom, {createRoot} from "react-dom/client";
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <div className="container">
        <div className="card">
            <div className="card--header"/>
            <img
                className="avatar"
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/312362655_3004991189800042_3139141499462251338_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eoXQOeitzj0AX9OMuGK&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCWeKgfg1222Kiz89bd2ahDKuZoZBPR4ry7PET5S-H6hg&oe=64A94E06"
                alt="avatar"
            />
            <div className="card--body">
                <div>
                    <p className="text-header">Trần Thế Khiêm</p>
                    <p className="text-sub">
                        Đẹp trai, sát gái
                    </p>
                    <button className="btn third">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>
);