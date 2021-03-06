const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

function get_salaries(req, res){
  pool.query('SELECT id, salary FROM users',
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
    let UserId = req.params.id
  let sql = 'SELECT ??, ??, ?? FROM ?? WHERE ?? < ??'
  const replacements = ['id', 'first_name', 'salary', 'employees', 'id', UserId]
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

function getSalaryByID(req, res){
  let userId = req.params.id
  let sql = 'SELECT ??, ??, ?? FROM ?? WHERE ?? = ?'
  const replacements = ['id', 'first_name', 'salary', 'employees', 'id', userId]
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
    get_salaries,
    get_first_names,
    getSalaryByID
  }