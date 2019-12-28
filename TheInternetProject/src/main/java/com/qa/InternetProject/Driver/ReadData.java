package com.qa.InternetProject.Driver;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReadData extends ReadProperty  {
	
	@SuppressWarnings("resource")
	public static void main(String[] args) throws IOException {
		FileInputStream fin = new FileInputStream("F:\\Automation\\Test Data\\TestDataforSelinum.xlsx");
		XSSFWorkbook workbook = new XSSFWorkbook(fin);
		
		XSSFSheet sheet = workbook.getSheet("Sheet1");
		
		System.out.println(sheet.getRow(2).getCell(0));
		
		FileOutputStream fout = new FileOutputStream("F:\\Automation\\Test Data\\TestDataforSelinum.xlsx");
		
		Row row = sheet.createRow(3);
		Cell cell = row.createCell(0);
		
		cell.setCellValue("Rakesh");
		
		workbook.write(fout);
		
		System.out.println(sheet.getRow(3).getCell(0));
		
		fin.close();
		fout.close();
	}
}
