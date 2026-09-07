function MemberStatus({isMember}){
    return(
        <>
            {isMember ? 
                <>
                <h1>🎉You're a Kita member!</h1>
                <p>Start earning points today.</p> 
                </>
                :
                <>
                <h1>You're not a Kita member yet.</h1>
                <p>Join Kita and start earning rewards!</p>
                </>
            }
        </>
    )
}

export default MemberStatus