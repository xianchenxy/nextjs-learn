// pages/api/create.js
import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

// 创建全局的 MySQL 连接池
import pool from '~/app/lib/db'

export async function GET(request) {
	try {
		// 从连接池中获取连接
		const connection = await pool.getConnection();

		// 执行 MySQL 查询
		const [rows, fields] = await connection.query('SELECT * FROM `user`');

		// 释放连接回连接池
		connection.release();

		console.log('zhq-connect', rows);
		return NextResponse.json({data: rows}, {status: 200});
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}