
CREATE DATABASE fylsaERP;
use fylsaERP;

/*
* TABLE User
*/
CREATE TABLE User(
    id_user int not null,
    id_admin int not null,
    email varchar(45)  not null,
    firstName varchar(45) not null,
    lastName varchar(45) not null,
    password varchar(45) not null,
    PRIMARY KEY (id_user)
    
);
/*
* TABLE Employees
*/
CREATE TABLE Employees(
    id_employees int not null AUTO_INCREMENT,
    firstName varchar(45) not null,
    lastName varchar(45) not null,
    position varchar(20) not null,
    salary int not null,
    socialNumber varchar(30) not null,
    id_Manager int not null,
    PRIMARY KEY (id_employees),
    FOREIGN KEY (id_Manager) REFERENCES User(id_user)
);
/*
* TABLE  Company
*/
CREATE TABLE Company(
    id_company int not null,
    name varchar(45) not null,
    address varchar(90) not null,
    rfc varchar(30) not null,
    PRIMARY KEY (id_company)
  
);
/*
* TABLE  Associates
*/
CREATE TABLE Associates(
    id_associates int not null,
    name varchar(45) not null,
    id_company int not null,
    PRIMARY KEY (id_associates),
    FOREIGN KEY (id_company) REFERENCES Company(id_company)
    
);
/*
* TABLE Products 
*/
CREATE TABLE Products(
    id_product varchar(40) not null,
    description varchar(70) not null,
    price int not null,
    measureUnit varchar(15) not null
    
);
/*
* TABLE Cotizacion 
*/
CREATE TABLE Cotizacion(
    id_cotizacion varchar(20) not null,
    creation_date date not null,
    company varchar(45) not null,
    addressed varchar(45) not null,
    reason varchar(60) not null,
    totalCost int not null,
    deliveryTime varchar(45) not null,
    PaymentConditions varchar(40) not null,
    PRIMARY KEY (id_cotizacion)
   
);
/*
* TABLE CotizacionService
*/
CREATE TABLE CotizacionService(
    item int not null,
    description varchar(50) not null,
    provide varchar(30) not null,
    cantity int not null,
    measureUnit varchar (15) not null,
    salePrice int not null,
    id_cotizacion varchar(20) not null,
    FOREIGN KEY (id_cotizacion) REFERENCES Cotizacion(id_cotizacion)
);


/*
Insert Values
**/


INSERT INTO User VALUES(1,1,"f.julianb@gmail.com","Francisco","Julian Bolaños","Fylsa");

INSERT INTO Employees(firstname,lastname,position,salary,socialNumber,id_Manager) VALUES("Fabiola","Campos","Auxiliar Contable",2000,"qwerty1234",1);

INSERT INTO Company VALUES(1,"Barcel","Carretera Mexico Toluca Km 54 Sn, Corredor Industrial Toluca Lerma (52004) Lerma, Estado de México ","JUBF650904AY1");

INSERT INTO Associates VALUES(1,"John Doe",1);

INSERT INTO Products VALUES("ABC","Codo Condulet 3 pulgadas",20,"PZA");
INSERT INTO Products VALUES("CBA","Cable Vinanel",50,"MT");

INSERT INTO Cotizacion VALUES("13042018-1","2018-04-13","Barcel","John Doe","Suministro de Material Electrico",2000,"28 dias","3 Semanas a Partir de entregada la cotizacion");

INSERT INTO CotizacionService VALUES(1,"Codo Condulet 3 pulgadas","Suministro",5,"PZA",20,"13042018-1");
INSERT INTO CotizacionService VALUES(1,"Cable Vinanel","Suministro e instalacion",10,"MT",50,"13042018-1");