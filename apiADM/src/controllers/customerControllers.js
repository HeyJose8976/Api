const controller = {};

//Controller Obra
//list obra
controller.listO = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM obra', (err, obras) => {
            if (err){
                res.json(err);
            }
            res.render('viewO', {
                data: obras
            });
        });
    });
};
//save obras
controller.saveO = (req,res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO obra set ?', [data], (err, data) => {
            res.redirect('/');
        })
    })
};
//edit obras
controller.editO = (req,res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SLECT * FROM obra WHERE id = ?', [id], (err, rows) => {
            res.render('obra_edit', {
                data: obras
            });
        });
    });
};
//delete obras
controller.deleteO = (req,res) => {
    const {id} = req.params.id;
    req.getConnection((err,conn) => {
    conn.query('DELETE FROM obra WHERE id = ?', [id], (err, rows) => {
        res.redirect('/'); 
    })
})
};
//update obras
controller.updateO = (req,res) => {
    const {id} = req.params;
    const newObra = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE obra set ? WHERE id = ?', [newObra, id], (err,rows) => {
            res.redirect('/');
        })
    }) 
};
//Controller Presupuestos
//list presupuestos
controller.listP = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM presupuesto', (err, presupuestos) => {
            if (err){
                res.json(err);
            }
            res.render('viewp', {
                data: presupuestos
            });
        });
    });
};
//save presupuestos
controller.saveP = (req,res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO presupuesto set ?', [data], (err, data) => {
            res.redirect('/');
        })
    })
};
//edit presupuestos
controller.editP = (req,res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SLECT * FROM presupuesto WHERE id = ?', [id], (err, rows) => {
            res.render('presupuesto_edit', {
                data: presupuestos
            });
        });
    });

};
//delete presupuestos
controller.deleteP = (req,res) => {
    const {id} = req.params.id;

    req.getConnection((err,conn) => {
    conn.query('DELETE FROM presupuesto WHERE id = ?', [id], (err, rows) => {
        res.redirect('/'); 
    })
})
};
//update presupuestos
controller.updateP = (req,res) => {
    const {id} = req.params;
    const newPresupuesto = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE presupuesto set ? WHERE id = ?', [newPresupuesto, id], (err,rows) => {
            res.redirect('/');
        })
    }) 
};
//Controller contratante
//list contratante
controller.listCon = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contratante', (err, contratantes) => {
            if (err){
                res.json(err);
            }
            res.render('viewCOn', {
                data: contratantes
            });
        });
    });
};
//save contratante
controller.saveCon = (req,res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO contratante set ?', [data], (err, data) => {
            res.redirect('/');
        })
    })
};
//edit contratante
controller.editCon = (req,res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SLECT * FROM contratante WHERE id = ?', [id], (err, rows) => {
            res.render('contratante_edit', {
                data: contratantes
            });
        });
    });
};
//delete contratante
controller.deleteCon = (req,res) => {
    const {id} = req.params.id;
    req.getConnection((err,conn) => {
    conn.query('DELETE FROM contratante WHERE id = ?', [id], (err, rows) => {
        res.redirect('/'); 
    })
})
};
//update contratante
controller.updateCon = (req,res) => {
    const {id} = req.params;
    const newContratante = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE contratante set ? WHERE id = ?', [newContratante, id], (err,rows) => {
            res.redirect('/');
        })
    }) 
};
//Controller pago
//list pago
controller.listPg = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pago', (err, pagos) => {
            if (err){
                res.json(err);
            }
            res.render('viewPg', {
                data: pagos
            });
        });
    });
};
//save pago
controller.savePg = (req,res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pago set ?', [data], (err, data) => {
            res.redirect('/');
        })
    })
};
//edit pago
controller.editPg = (req,res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SLECT * FROM pago WHERE id = ?', [id], (err, rows) => {
            res.render('pago_edit', {
                data: pagos
            });
        });
    });
};
//delete pago
controller.deletePg = (req,res) => {
    const {id} = req.params.id;
    req.getConnection((err,conn) => {
    conn.query('DELETE FROM pago WHERE id = ?', [id], (err, rows) => {
        res.redirect('/'); 
    })
})
};
//update pago
controller.updatePg = (req,res) => {
    const {id} = req.params;
    const newPago = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE pago set ? WHERE id = ?', [newPago, id], (err,rows) => {
            res.redirect('/');
        })
    }) 
};
//Controller Usuario
//list usuario
controller.listU = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuarios) => {
            if (err){
                res.json(err);
            }
            res.render('viewU', {
                data: usuarios
            });
        });
    });
};
//save usuario
controller.saveU = (req,res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuario set ?', [data], (err, data) => {
            res.redirect('/');
        })
    })
};
//edit usuario
controller.editU = (req,res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SLECT * FROM usuario WHERE id = ?', [id], (err, rows) => {
            res.render('usuario_edit', {
                data: usuarios
            });
        });
    });
};
//delete usuario
controller.deleteU = (req,res) => {
    const {id} = req.params.id;
    req.getConnection((err,conn) => {
    conn.query('DELETE FROM usuario WHERE id = ?', [id], (err, rows) => {
        res.redirect('/'); 
    })
})
};
//update usuario
controller.updateU = (req,res) => {
    const {id} = req.params;
    const newUsuario = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE usuario set ? WHERE id = ?', [newUsuario, id], (err,rows) => {
            res.redirect('/');
        })
    }) 
};

module.exports = controller;