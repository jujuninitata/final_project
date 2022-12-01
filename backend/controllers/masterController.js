const db = require("./../models");

const tambahagama = async (req, res) =>
{
    const { kodeagama,agama,status} = req.body;
    const resAdd = await db.agama.create({kodeagama,agama,status});
    return res.status(201).json({
        message: "register data agama successfully!",
        data: resAdd,
    })
}
const tambahjabatan = async (req, res) =>
{
    const { kodejabatan,namajabatan,status} = req.body;
    const resAdd = await db.jabatan.create({kodejabatan,namajabatan,status});
    return res.status(201).json({
        message: "register data Jabatan successfully!",
        data: resAdd,
    })
}
const tambahrole = async (req, res) =>
{
    const { roleId,roleName,status} = req.body;
    const resAdd = await db.role.create({roleId,roleName,status});
    return res.status(201).json({
        message: "register data role successfully!",
        data: resAdd,
    })
}

const tambahunitkerja = async (req, res) =>
{
    const { kodeunit,namaunit,status} = req.body;
    const resAdd = await db.unitkerja.create({kodeunit,namaunit,status});
    return res.status(201).json({
        message: "register data Unit Kerja successfully!",
        data: resAdd,
    })
}

const tambahjeniscuti = async (req, res) =>
{
    const { idjeniscuti,namacuti,maxhari,status} = req.body;
    const resAdd = await db.jeniscuti.create({idjeniscuti,namacuti,maxhari,status});
    return res.status(201).json({
        message: "register data jenis cuti successfully!",
        data: resAdd,
    })
}
module.exports = {tambahagama,tambahjabatan,tambahjeniscuti,tambahrole,tambahunitkerja}