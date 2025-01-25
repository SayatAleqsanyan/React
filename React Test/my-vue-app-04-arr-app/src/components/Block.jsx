
export const Block = () => {
    
    let friends = [
        {id: 1, name: 'Dimych', lastName: 'Ivanov', age: 33},
        {id: 2, name: 'Andrey', lastName: 'Sidorov', age: 27},
        {id: 3, name: 'Sveta', lastName: 'Petrova', age: 24},
        {id: 4, name: 'Sasha', lastName: 'Koval', age: 28},
        {id: 5, name: 'Valera', lastName: 'Ivanov', age: 35},
    ]

    return (
        <div>
            <h3> {JSON.stringify(friends)} </h3> 

            {friends.map(friend => {
            return (
                <div key={friend.id}>
                    <span>  name: {friend.name}</span> 
                    <span>  lastName: {friend.lastName}</span>
                    <span>  age: {friend.age}</span>
                </div>
            )
        })}

        </div>
    )
}
