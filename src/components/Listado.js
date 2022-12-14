import React from 'react'
import Item from './Item';
import data from '../data/data.json';
import styles from './styles/listado.module.scss';


// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({fcIncrementar}) {
  return (
    <div className={`container ${styles.container}`}>
      {data.map(data => (
        <Item key={data.id} nombre={data.producto.nombre} descripcion={data.producto.descripcion} stock={data.stock} id={data.id} fcIncrementar={fcIncrementar} />
      ))}
    </div>
  )
}