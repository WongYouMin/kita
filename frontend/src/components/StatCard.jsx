function StatCard({statLabel, statValue}) {
    return(
        <article className='stat-card'>
            <h3>{statValue}</h3>
            <p>{statLabel}</p>
        </article>
    )
}

export default StatCard;