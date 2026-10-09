import { Button, Card, CardActions, CardContent, CardHeader, FormGroup, FormLabel, MenuItem, RadioGroup, Rating, Select, Slider, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function MordorForm({ onCreateGuerrero = () => {} }) {
  const tipoGuerrero = [
    { label: 'Orco', value: 'orco' },
    { label: 'Uruk', value: 'uruk' },
  ];

  const rango = [
    { label: 'Capitan', value: 'capitan' },
    { label: 'Berserker', value: 'berserker' },
    { label: 'Explorador', value: 'explorador' },
    { label: 'Asediador', value: 'asediador' },
  ];

  const [rangoGuerrero, setRangoGuerrero] = useState(rango[0].value);
  const [guerrero, setGuerrero] = useState(tipoGuerrero[0].value);
  const [nombre, setNombre] = useState('');
  const [nivelCombate, setNivelCombate] = useState(1);
  const [nivelAmenaza, setNivelAmenaza] = useState(1);

  const handleClick = () => {
    const guerrerosGuardados = {};
    guerrerosGuardados.nombre = nombre;
    guerrerosGuardados.nivelCombate = nivelCombate;
    guerrerosGuardados.nivelAmenaza = nivelAmenaza;
    guerrerosGuardados.rangoGuerrero = rangoGuerrero;
    guerrerosGuardados.guerrero = guerrero;
    onCreateGuerrero(guerrerosGuardados);
  };

  return (
    <Card>
      <CardHeader title="Ingreso de Guerreros de Mordor" />
      <CardContent>
        <div className="mt-3">
          <TextField label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} fullWidth/>
        </div>
        <div className="mt-3">
          <FormGroup>
            <FormLabel>Tipo de guerrero</FormLabel>

            <RadioGroup className="mt-3">
              {tipoGuerrero.map((tipo) => (
                <div key={tipo.value}>
                  <input
                    type="radio"
                    name="guerrero"
                    value={tipo.value}
                    onChange={(e) => setGuerrero(e.target.value)}
                  />
                  <label>{tipo.label}</label>
                </div>
              ))}

            </RadioGroup>
          </FormGroup>
        </div>
        <div className="mt-3">
          <FormLabel id="nivel_combate" required>
            Nivel de Combate: {nivelCombate}
          </FormLabel>
          <Slider
            aria-labelledby="nivel_combate"
            value={nivelCombate}
            onChange={(e, value) => setNivelCombate(value)}
            min={1}
            max={100}
          />
        </div>
        <div className="mt-3">
          <Select label = "Rango" id="rango" value={rangoGuerrero} onChange={(e) => setRangoGuerrero(e.target.value)} fullWidth>
            {rango.map((r) => 
              <MenuItem key={r.value} value={r.value}>{r.label}</MenuItem>
            )}
          </Select>
        </div>
        <div className="mt-3">
          <FormLabel id="nivel-amenaza-label">
            Nivel de Amenaza
          </FormLabel>
          <Stack spacing={1} direction="row">
            <Rating
              aria-labelledby="nivel-amenaza-label"
              name="nivel-amenaza"
              value={nivelAmenaza}
              max={5}
              onChange={(_, valor) => {
                if (valor !== null) setNivelAmenaza(valor);
              }}
            />
          </Stack>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Registrar Guerrero
        </Button>
      </CardActions>
    </Card>
  );
}

export default MordorForm;