import { Button, Card, CardContent, CardHeader, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function MordorView({ guerreros, onQuitar }) {
  return (
    <Card>
      <CardHeader title="Tabla de tropas" />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre del Guerrero</TableCell>
                <TableCell>Tipo de Guerrero</TableCell>
                <TableCell>Categoría / Rango</TableCell>
                <TableCell>Nivel</TableCell>
                <TableCell>Clasificación</TableCell>
                <TableCell>Acción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guerreros.map((guerrero, index) => (
                <TableRow key={`${guerrero.nombre}-${index}`}>
                  <TableCell>{guerrero.nombre}</TableCell>
                  <TableCell>{guerrero.guerrero}</TableCell>
                  <TableCell>{guerrero.rangoGuerrero}</TableCell>
                  <TableCell>{guerrero.nivelCombate}</TableCell>
                  <TableCell>
                    <Chip
                      label={guerrero.guerrero}
                      color={guerrero.guerrero === 'orco' ? 'success' : 'primary'}
                    />
                  </TableCell>
                  <TableCell>
                    <Button color="error" onClick={() => onQuitar(guerrero.nombre)}>
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default MordorView;