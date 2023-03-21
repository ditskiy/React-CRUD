import "./app-info.css";

const AppInfo = ({employers, incrised}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании ІВ</h1>
            <h2>Общее число сотрудников: {employers}</h2>
            <h2>Премию получат: {incrised}</h2>
        </div>
    );
}

export default AppInfo;