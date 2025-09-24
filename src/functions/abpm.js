
export function sezioneA(inputs) {
    if(!inputs) return "Input error"

    const A1 = [inputs.MGS, inputs.MDS, inputs.MNS].every(x => x < 140)
    const A2 = [inputs.MGD, inputs.MDD, inputs.MND].every(x => x < 90)
    const A3 = [inputs.MGS, inputs.MDS, inputs.MNS].some(x => x >= 140)
    const A4 = [inputs.MGD, inputs.MDD, inputs.MND].some(x => x >= 90)

    let andamento;
    let specifica = "";

    if(A1 && A2) {
        andamento = "normotensivo"
    } else if (A3 || A4) {
        andamento = "ipertensivo"
        if (A1 && A4) {
            specifica = " (valori sistolici nei limiti)"
        } else if (A2 && A3) {
            specifica = " (valori diastolici nei limiti)"
        }
    } else {
        andamento = "non definibile"
    }

    return "Curva pressoria con andamento globale di tipo " + andamento + specifica + "."
}

export function sezioneB(inputs) {
    if(!inputs) return "Input error"

    const B1 = inputs.PDS < 140
    const B2 = inputs.PDD < 90
    const B3 = inputs.PNS < 149
    const B4 = inputs.PND < 90
    const B5 = inputs.PDS >= 140
    const B6 = inputs.PDD >= 90
    const B7 = inputs.PNS >= 149
    const B8 = inputs.PND >= 90

    if (B1 && B2 && B3 && B4)
        return "Assenza di picchi pressori patologici.\n"
    else {
        const B9 = (140 <= inputs.PDS <= 159) || (140 <= inputs.PNS <= 159)
        const B10 = (90 <= inputs.PNS <= 99) || (90 <= inputs.PND <= 99)
        const B11 = (160 <= inputs.PDS <= 179) || (160 <= inputs.PNS <= 179)
        const B12 = (100 <= inputs.PNS <= 109) || (100 <= inputs.PND <= 109)
        const B13 = (inputs.PDS >= 160) || (inputs.PNS >= 160)
        const B14 = (inputs.PNS >= 110) || (inputs.PND >= 110)

        let grado

        if((B9 || B10) && !(B11 || B12 || B13 || B14)) {
            grado = "I grado"
        } else if((B11 || B12) && !(B13 || B14)) {
            grado = "II grado"
        } else {
            grado = "III grado"
        }

        let distribuzione = ""

        if ((B5 || B6) && (B3 && B4) && !(B7 || B8)) {
            distribuzione = " (distribuiti nelle ore diurne)"
        } else if((B7 || B8) && (B1 && B2) && !(B5 || B6)) {
            distribuzione = " (distribuiti nelle ore notturne)"
        } else if((B5 || B6) && (B7 || B8)) {
            distribuzione = " (distribuiti nelle ore diurne e notturne)"
        }

        return "Presenza di picchi pressori compatibili con ipertensione fino al " + grado + distribuzione + ".\n"
    }
}

export function sezioneC(inputs) {
    if(!inputs) return "Input error"

    return "- PA media globale " + inputs.MGS + "/" + inputs.MGD + " mmHg\n" +
    "- PA media diurna " + inputs.MDS + "/" + inputs.MDD + " mmHg\n" +
    "- PA media notturna " + inputs.MNS + "/" + inputs.MND + " mmHg\n" +
    "- PA max diurna sistolica " + inputs.PDS + " mmHg; diastolica " + inputs.PDD + " mmHg\n" +
    "- PA max notturna sistolica " + inputs.PNS + " mmHg; diastolica " + inputs.PND + " mmHg\n"
}

export function sezioneD(inputs) {
    if(!inputs) return "Input error"

    let conservatoStr = (inputs.CRO === 1) ? "conservato" : "non conservato"

    return "Cronotropismo cardiaco " + conservatoStr + "."
}

export function sezioneE(inputs) {
    if(!inputs) return "Input error"

    let conservatoStr = (inputs.DIP === 1) ? "conservato" : "non conservato"

    return "Dipping notturno " + conservatoStr + ".\n"
}

export function sezioneF(inputs) {
    if(!inputs) return "Input error"

    const now = new Date();
    const date_str = now.toLocaleDateString("it-IT")
    const time_str = now.toLocaleTimeString("it-IT", {hour: '2-digit', minute:'2-digit'})
    return "\nDott. Gaetano Capriati\n" +
        "Esame refertato in data " + date_str + " alle ore " + time_str + " - Copia conforme all'originale in mio possesso."
}
