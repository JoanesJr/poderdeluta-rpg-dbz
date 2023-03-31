import { useState } from "react";

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "red",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "yellow",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "orange",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF4500",
    },
    "& .MuiInputBase-input": {
      color: "white", // define a cor do texto para azul
    },
  },
});

const ranks = [
  {
    name: "Rank 1",
    value: 1,
  },
  {
    name: "Rank 2",
    value: 2,
  },
  {
    name: "Rank 3",
    value: 3,
  },
  {
    name: "Rank 4",
    value: 4,
  },
  {
    name: "Rank 5",
    value: 5,
  },
  {
    name: "Rank 6",
    value: 6,
  },
];

export const HomeScreen = () => {
  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [forca, setForca] = useState(0);
  const [destreza, setDestreza] = useState(0);
  const [constituicao, setConstituicao] = useState(0);
  const [qi, setQi] = useState(0);
  const [sabedoria, setSabedoria] = useState(0);
  const [carisma, setCarisma] = useState(0);

  const [rank, setRank] = useState(1);
  const [ca, setCa] = useState(10);
  const [habBasica, setHabBasica] = useState(0);
  const [habComum, setHabComum] = useState(0);
  const [habIncomum, setHabIncomum] = useState(0);
  const [habRara, setHabRara] = useState(0);
  const [habLendaria, setHabendaria] = useState(0);
  const [habUnica, setHabCUnica] = useState(0);

  const [poderDeLuta, setPoderDeLuta] = useState(false);
  const [poderDeLutaValue, setPoderDeLutaValue] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const normalizedNums = (value) => {
    if (!value || value === undefined || value == null) {
      return 0;
    } else {
      return Number(value);
    }
  };

  const calcPowerValue = (obj) => {
    let mpHabUnica = 0;
    const mpStatusCA =
      (obj.forca + obj.destreza + obj.constituicao + obj.qi + obj.carisma) *
      obj.ca;
    const mpRank = obj.rank * (50 * obj.rank ** 2);
    const mpHabBase = obj.habBasica * 40;
    const mpHabComum = obj.habComum * 80;
    const mpHabIncomum = obj.habIncomum * 240;
    const mpHabRara = obj.habRara * 400;
    const mpHabLendaria = obj.habLendaria * 2400;

    switch (obj.habUnica) {
      case 1:
        mpHabUnica = 450;
        break;
      case 2:
        mpHabUnica = 20000;
        break;
      case 3:
        mpHabUnica = 80000;
        break;
    }

    const mpHabilidades =
      mpHabBase +
      mpHabComum +
      mpHabIncomum +
      mpHabRara +
      mpHabLendaria +
      mpHabUnica;

    const power = mpStatusCA + mpRank + mpHabilidades;
    const powerFormatted = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 0,
    }).format(power);

    if (power < 1000) {
      setImageUrl(
        "https://pa1.narvii.com/6575/26b76836dfc7481cc037a22d58ce505febfc57d3_hq.gif"
      );
    } else if (power < 5000) {
      setImageUrl(
        "http://pa1.narvii.com/6576/e68e58c8cbdf728f7bc33eee19b121826d2673bd_00.gif"
      );
    } else if (power < 15000) {
      setImageUrl(
        "https://64.media.tumblr.com/516a25ce69abc66f366f05a6c5eb14eb/tumblr_nnnqbjyjVD1tp8kdpo1_500.gif"
      );
    } else if (power < 50000) {
      setImageUrl(
        "https://64.media.tumblr.com/bc60ed133ac418bbe7b3f73555ceb37c/tumblr_mmbem4JsQq1rfjowdo1_500.gif"
      );
    } else if (power < 100000) {
      setImageUrl(
        "https://media.tenor.com/Z3DYCffBSt4AAAAC/super-saiyan3-goku.gif"
      );
    } else {
        setImageUrl('https://i.makeagif.com/media/10-27-2016/nS-bSM.gif');
    }

    return powerFormatted;
  };

  const handleCalcPower = () => {
    const obj = {
      forca: normalizedNums(forca),
      destreza: normalizedNums(destreza),
      constituicao: normalizedNums(constituicao),
      qi: normalizedNums(qi),
      sabedoria: normalizedNums(sabedoria),
      carisma: normalizedNums(carisma),
      habBasica: normalizedNums(habBasica),
      habComum: normalizedNums(habComum),
      habIncomum: normalizedNums(habIncomum),
      habRara: normalizedNums(habRara),
      habLendaria: normalizedNums(habLendaria),
      habUnica: normalizedNums(habUnica),
      ca: normalizedNums(ca),
      rank: normalizedNums(rank),
    };

    setPoderDeLutaValue(calcPowerValue(obj));

    setPoderDeLuta(true);

    setTimeout(() => {
      setPoderDeLuta(false);
      setPoderDeLutaValue(0);
    }, 10000);
  };

  const sxItemSpacing = {
    mb: 2,
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid
        container
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: `url('https://image.api.playstation.com/vulcan/ap/rnd/202111/3004/OuRfj5k4SX4b0z6Qn45O3yrD.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          p: 2,
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              mb: 1,
            }}
          >
            <Grid container item>
              <Grid item xs={12} lg={6} sx={sxItemSpacing}>
                <Box>
                  <CssTextField
                    type="number"
                    label="Força"
                    value={forca}
                    onChange={(e) => setForca(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} sx={sxItemSpacing}>
                <Box>
                  <CssTextField
                    type="number"
                    label="QI"
                    value={qi}
                    onChange={(e) => setQi(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} sx={sxItemSpacing}>
                <Box>
                  <CssTextField
                    type="number"
                    label="Destreza"
                    value={destreza}
                    onChange={(e) => setDestreza(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} sx={sxItemSpacing}>
                <Box>
                  <CssTextField
                    type="number"
                    label="Sabedoria"
                    value={sabedoria}
                    onChange={(e) => setSabedoria(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} sx={sxItemSpacing}>
                <Box>
                  <CssTextField
                    type="number"
                    label="Constituição"
                    value={constituicao}
                    onChange={(e) => setConstituicao(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} sx={sxItemSpacing}>
                <Box>
                  <CssTextField
                    type="number"
                    label="Carisma"
                    value={carisma}
                    onChange={(e) => setCarisma(e.target.value)}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {!mdDown && (
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                pr: 5,
                alignItems: "flex-end",
              }}
            >
              {poderDeLuta && (
                <motion.div
                  initial={{ y: -1000 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Box
                    sx={{
                      // height: 250,
                      p: 2,
                      position: "absolute",
                      top: { xs: 0, lg: 25 },
                      left: { xs: 0, lg: 1300 },
                    }}
                  >
                    {/* <Typography variant="h5">Seu poder de luta é: </Typography> */}
                    <Box
                      component="img"
                      sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        ml: 10
                      }}
                      alt="The house from the offer."
                      src="https://media.discordapp.net/attachments/1077276441818968124/1090428279380529244/scannertutu.png"
                    />
                    <Box sx={{
                        mt: {xs: 0, lg: -18},
                        padding: 1,
                        ml: 12
                      }}>
                    <Typography variant="h4" >{poderDeLutaValue}</Typography>
                    </Box>
                      

                    <Box
                      component="img"
                      sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        mt: 13,
                        ml: 5
                      }}
                      alt="The house from the offer."
                      src={imageUrl}
                    />
                  </Box>
                </motion.div>
              )}
            </Grid>
          )}

          <Grid
            container
            item
            sx={{
              mb: 2,
            }}
          >
            <Grid item xs={12} lg={6}>
              <Grid container item>
                <Grid item xs={12} lg={6}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <CssTextField
                      id="ranks"
                      select
                      label="Ranks"
                      defaultValue="1"
                      helperText="Rank do personagem"
                      value={rank}
                      onChange={(e) => setRank(e.target.value)}
                    >
                      {ranks.map((rank) => (
                        <MenuItem key={rank.value + "rank"} value={rank.value}>
                          {rank.name}
                        </MenuItem>
                      ))}
                    </CssTextField>
                  </Box>
                </Grid>
                <Grid xs={12} lg={6}>
                  <Box>
                    <CssTextField
                      label="CA"
                      type="number"
                      value={ca}
                      onChange={(e) => setCa(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item>
            <Grid item xs={12} lg={6}>
              <Grid container item>
                <Grid item xs={12} lg={4} sx={sxItemSpacing}>
                  <Box>
                    <CssTextField
                      label="Habilidades Básicas"
                      type="number"
                      value={habBasica}
                      onChange={(e) => setHabBasica(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4} sx={sxItemSpacing}>
                  <Box>
                    <CssTextField
                      label="Habilidades Comuns"
                      type="number"
                      value={habComum}
                      onChange={(e) => setHabComum(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4} sx={sxItemSpacing}>
                  <Box>
                    <CssTextField
                      label="Habilidades Incomuns"
                      type="number"
                      value={habIncomum}
                      onChange={(e) => setHabIncomum(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4} sx={sxItemSpacing}>
                  <Box>
                    <CssTextField
                      label="Habilidades Raras"
                      type="number"
                      value={habRara}
                      onChange={(e) => setHabRara(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4} sx={sxItemSpacing}>
                  <Box>
                    <CssTextField
                      label="Habilidades Lendária"
                      type="number"
                      value={habLendaria}
                      onChange={(e) => setHabendaria(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4} sx={sxItemSpacing}>
                  <Box>
                    <CssTextField
                      label="Habilidades Única"
                      type="number"
                      value={habUnica}
                      onChange={(e) => setHabCUnica(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item>
            <Grid item xs={12} lg={6}>
              <Grid container item>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleCalcPower}
                  >
                    Calcular Poder de Luta
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {mdDown && (
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                pr: 5,
                alignItems: "flex-end",
              }}
            >
              {poderDeLuta && (
                <Box
                  sx={{
                    p: 2,
                  }}
                >
                  <motion.div initial={{ y: -1000 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}>
                    <Typography sx={{
                        ml: 8
                    }} variant="h5">Seu poder de luta é: </Typography>

                         <Box
                      component="img"
                      sx={{
                        height: 153,
                        width: 270,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        ml: 10
                      }}
                      alt="The house from the offer."
                      src="https://media.discordapp.net/attachments/1077276441818968124/1090428279380529244/scannertutu.png"
                    />
                      <Typography variant="h4" sx={{
                        ml: 13,
                        mt: -15
                      }}>{poderDeLutaValue}</Typography>
                    
                    <Box
                      component="img"
                      sx={{
                        height: 130,
                        width: 250,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        mt: 10,
                        ml: 8,
                      }}
                      alt="The house from the offer."
                      src={imageUrl}
                    />
                  </motion.div>
                </Box>
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
