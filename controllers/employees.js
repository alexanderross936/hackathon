const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

function get_employees(req, res){
  pool.query('SELECT * FROM users',
  function(err, rows){
      if(err){
          return res.json({
              'error': true,
              'message': 'Error occured:' + err
          })
      } else {
          res.json(rows)
      }
  })
}

function get_first_names(req, res){
  let sql = 'SELECT ??, ?? FROM ?? WHERE ?? < ??'
  const replacements = ['id', 'first_name', 'users', 'id', 10]
  sql = mysql.format(sql, replacements)
  pool.query(sql, function(err, rows){
      if(err){
          return res.json({
              'error': true,
              'message': 'Error occured:' + err
          })
      } else {
          res.json(rows)
      }
  })
}

function getEmployeeByID(req, res){
  let userId = req.params.id
  let sql = 'SELECT ??, ?? FROM ?? WHERE ?? = ?'
  const replacements = ['id', 'first_name', 'users', 'id', userId]
  sql = mysql.format(sql, replacements)
  pool.query(sql, function(err, rows){
      if(err){
          return res.json({
              'error': true,
              'message': 'Error occured:' + err
          })
      } else {
          res.json(rows)
      }
  })
}

module.exports = {
    getAllEmployees,
    getEmployeeById
  }