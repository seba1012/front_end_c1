import React from 'react'
import JuegosForm from './JuegosForm'
import { Card, CardContent, CardHeader, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

// table, grid muestra de filas y columnas mas recorrido .map
function JuegosView() {
  return (
    <Card>
        <CardHeader title="Lista juegos" ></CardHeader>
        <CardContent>
            <TableContainer component={Paper}>
            
            </TableContainer>
        </CardContent>
    </Card>
  )
}

export default JuegosView