function GuestList({ guestList }) {
    return (
        <>
            <h2>Guest List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kid's Meal</th>
                    </tr>
                </thead>
                <tbody>
                    {guestList.map(guest => (
                        <tr key={guest.id}>
                            <td>{guest.name}</td>
                            <td>{String(guest.kidsMeal)}</td>
                            <td><button onClick={() => console.log(guest)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
} // end GuestList fn

export default GuestList; // export to App