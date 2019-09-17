--  dormmate SQL Queries

-- student - answers
SELECT s.student_id
	  ,s.name
      ,s.photo
      ,a.survey_answer_id
      ,a.question_nbr
      ,a.answer
  FROM student AS s
  JOIN survey_answer AS a
    on s.student_id = a.student_id
 ORDER BY s.student_id
         ,a.survey_answer_id




-- Customer Functions

-- select all products
SELECT d.department_name 
	  ,p.item_code 
	  ,p.product_name 
	  ,p.retail_price 
	  ,p.stock_qty 
	  ,p.product_sales 
  FROM product as p 
  JOIN department as d 
	ON p.department_id = d.department_id 
 ORDER BY d.department_name, p.product_name;

-- look up product for validation
SELECT p.item_code 
  FROM product as p 
 WHERE p.item_code = ?

-- check for available qty
SELECT p.item_code 
   FROM product as p 
  WHERE p.item_code = ? and p.stock_qty >= ?

-- update product after an order
UPDATE product 
   SET stock_qty = stock_qty - ? 
	  ,product_sales = product_sales + (retail_price * ?) 
 WHERE item_code = ?

-- insert new product
INSERT 
  INTO product_order 
 SELECT  0 
		,CURDATE() 
		,p.product_id 
		,? 
		,p.retail_price 
		,p.retail_price * ? 
   FROM product AS p 
  WHERE p.item_code = ?

-- show results of an order
SELECT p.item_code 
	  ,p.retail_price 
	  ,? as order_qty 
	  ,p.retail_price * ? AS total_order_cost 
	  ,p.stock_qty AS new_stock_qty 
  FROM product as p 
 WHERE p.item_code = ?   



-- Manager Functions

-- show product list
SELECT d.department_name 
	 ,p.item_code 
  	 ,p.product_name 
	 ,p.retail_price 
	 ,p.stock_qty 
	 ,p.product_sales 
 FROM product as p 
 JOIN department as d 
   ON p.department_id = d.department_id 
ORDER BY d.department_name, p.product_name

-- show low inventory products
SELECT d.department_name 
	  ,p.item_code 
	  ,p.product_name 
	  ,p.stock_qty 
  FROM product as p 
  JOIN department as d 
	ON p.department_id = d.department_id 
 WHERE p.stock_qty < 5 
 ORDER BY d.department_name, p.product_name

-- check item for validation
SELECT p.item_code 
  FROM product as p 
 WHERE p.item_code = ?

-- update stock qty 
UPDATE product 
   SET stock_qty = stock_qty + ? 
 WHERE item_code = ?

-- show item after inventory update
SELECT d.department_name 
	  ,p.item_code 
	  ,p.product_name 
	  ,p.stock_qty 
  FROM product as p 
  JOIN department as d 
    ON p.department_id = d.department_id 
 WHERE p.item_code = ? 
 ORDER BY d.department_name, p.product_name

 -- select department name for Inquierer choice list
SELECT d.department_name 
  FROM department AS d 
 ORDER BY d.department_name

-- insert a new product
INSERT 
  INTO product 
 SELECT 0 
	   ,? 
	   ,? 
	   ,(SELECT d.department_id FROM department AS d WHERE d.department_name = ?) 
	   ,? 
	   ,? 
	   ,0 

-- show new product
SELECT d.department_name 
	  ,p.item_code 
	  ,p.product_name 
	  ,p.retail_price 
	  ,p.stock_qty 
	  ,p.product_sales 
  FROM product as p 
  JOIN department as d 
	ON p.department_id = d.department_id 
 WHERE p.product_id = ? 
 ORDER BY d.department_name, p.product_name     


-- show orders by date range
SELECT  o.product_order_id 
	   ,d.department_name 
	   ,DATE_FORMAT(o.order_date,'%Y-%m-%d') AS order_date 
	   ,p.item_code 
	   ,p.product_name 
	   ,o.retail_price 
	   ,o.order_qty 
	   ,o.extended_cost 
  FROM product_order AS o 
  JOIN product AS p 
    ON o.product_id = p.product_id 
  JOIN department AS d 
    ON d.department_id = p.department_id 
 WHERE o.order_date BETWEEN ? AND ? 
 ORDER BY d.department_name 
		 ,o.order_date 
		 ,p.product_name


-- Supervisor Functions

-- show department profitibility
SELECT d.department_id 
	  ,d.department_name 
	  ,d.overhead_cost AS overhead_cost
	  ,CASE 
	     WHEN ISNULL(SUM(p.product_sales)) THEN 0 
		   ELSE SUM(p.product_sales) 
	   END AS total_sales 
	 ,CASE 
		  WHEN ISNULL(SUM(p.product_sales) - d.overhead_cost) THEN 0 
	  	ELSE SUM(p.product_sales) - d.overhead_cost 
	  END AS total_profit 
FROM department AS d 
LEFT OUTER 
JOIN product AS p 
  ON p.department_id = d.department_id 
GROUP BY d.department_id 
	    ,d.department_name 
	    ,d.overhead_cost

-- check department name for validation
SELECT d.department_name 
  FROM department AS d 
 WHERE d.department_name = ?

--  insert new department
INSERT 
  INTO department 
SELECT 0 
	  ,? 
	  ,? 

--  show department
SELECT  d.department_name 
	   ,d.overhead_cost 
  FROM  department AS d 
 WHERE  d.department_id = ?    


