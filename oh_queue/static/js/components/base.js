let Base = ({state, children}) => {
  let myTicket = getMyTicket(state);

  if (isStaff(state) || myTicket) {
    requestNotificationPermission();
  }

  if (!state.loaded) return null;

  return (
    <div>
      <Navbar currentUser={state.currentUser} myTicket={myTicket}/>
      <OfflineIndicator offline={state.offline && state.loaded}/>
      {children}
    </div>
  );
};
