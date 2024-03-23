import style from './PowerBiDashboard.module.scss'

function PowerBiDashboard() {

    return (
        <section className={style.container}>
            <iframe title="Store Sales" src="https://app.powerbi.com/view?r=eyJrIjoiMjhhYTJiNGMtZGQyNS00NWZhLWEzZTktYjgyNzIzYTc3MGZjIiwidCI6ImI5M2Y0MDhjLWJmYjEtNGVmNC1iZDJkLTFiMGRkNmQwOGQyNSJ9" allowFullScreen={true}></iframe>
        </section>
    )
}

export default PowerBiDashboard
