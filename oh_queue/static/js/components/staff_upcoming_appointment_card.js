function StaffUpcomingAppointmentCard({ appointment, locations, onClick })  {
    const startTimeObj = moment.utc(appointment.start_time);
    const endTimeObj = moment.utc(appointment.start_time).add(appointment.duration, "seconds");

    const possessive = appointment.helper ? "Your" : "This";

    const content = (
        <React.Fragment>
            {possessive} appointment is at <b>{locations[appointment.location_id].name}</b>,
            with a group of <b>{appointment.signups.length}</b> students.
        </React.Fragment>
    );

    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    return (
        <div className="panel panel-default" onClick={handleClick} >
            <ul className="list-group">
                <a href="#" className="list-group-item">
                    {!appointment.helper && <span className="badge">No helper assigned.</span>}
                    <h4 className="list-group-item-heading">
                        {startTimeObj.format("dddd, MMMM D")} at {startTimeObj.format("h:mma")}-{endTimeObj.format("h:mma")}
                    </h4>
                    {content}
                </a>
            </ul>
        </div>
    )
}
