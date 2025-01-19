function Football(){
    const shoot = (a, e) => {
        alert(a);
        console.log("Here is the info about the event that occured\n",e);
    }

    return (
        <button onClick={(e) => shoot("Goal!!!", e)}>Take the shot.</button>
    );
}

export default Football