import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UserList from './Compenants/userList'
import './App.css'



/* 
//Créer une mini application React avec Redux bancaire où:
On peut ajouter un utilisateur à la liste des uilisateur
On peut ajouter un compte à la liste des compte
On peut faire un virement,un retrait, un dépôt sur compte
On peut voir la liste des transaction sur le compte d'un utilistauer compte

- User {id(indice dans le tableau des utilisateurs), nom(String), prenom(String), age(String), sex['M', 'F']}
- Compte {id(indice dans le tableau des comptes), user_id(Number), balance(Number)}
- Transaction {id(indice dans le tableau des transactions), compte_id(Number), balance(Number), date(date), cash_flow['IN', 'OUT']}
 */
function App() {
  return (

    <>
      <main>
        <div>
          <UserList />
          {/*  <Forms />
          <WithdrawForm />
          <TransactionList /> */}
        </div>

      </main>
    </>


  )
}

export default App
