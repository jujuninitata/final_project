const db = require("./../models");

const tambahProfile = async (req, res) =>
{
    const { userid,nip,email,nama,tempatlahir,tanggallahir,jeniskelamin,telp,kodeunit,jabatan,statusnikah,agama,alamat,kodeprovinsi,kodekota,kodekecamatan,kodekelurahan,kodepos,rt,rw,roleId } = req.body;
    const resAdd = await db.profile.create({userid,nip,email,nama,tempatlahir,tanggallahir,jeniskelamin,telp,kodeunit,jabatan,statusnikah,agama,alamat,kodeprovinsi,kodekota,kodekecamatan,kodekelurahan,kodepos,rt,rw,roleId});
    return res.status(201).json({
        message: "register data successfully!",
        data: resAdd,
    })
}

module.exports = {tambahProfile}