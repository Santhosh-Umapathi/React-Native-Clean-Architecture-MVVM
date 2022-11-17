import {IAddress, IBank, ICompany, IHair, IUser} from '../../model';

export class UserEntity implements IUser {
  id: number | undefined;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  domain: string;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;

  constructor(
    id: number | undefined,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IHair,
    domain: string,
    ip: string,
    address: IAddress,
    macAddress: string,
    university: string,
    bank: IBank,
    company: ICompany,
    ein: string,
    ssn: string,
    userAgent: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.maidenName = maidenName;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.password = password;
    this.birthDate = birthDate;
    this.image = image;
    this.bloodGroup = bloodGroup;
    this.height = height;
    this.weight = weight;
    this.eyeColor = eyeColor;
    this.hair = hair;
    this.domain = domain;
    this.ip = ip;
    this.address = address;
    this.macAddress = macAddress;
    this.university = university;
    this.bank = bank;
    this.company = company;
    this.ein = ein;
    this.ssn = ssn;
    this.userAgent = userAgent;
  }

  static create = (
    id: number | undefined,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IHair,
    domain: string,
    ip: string,
    address: IAddress,
    macAddress: string,
    university: string,
    bank: IBank,
    company: ICompany,
    ein: string,
    ssn: string,
    userAgent: string,
  ) => {
    return new UserEntity(
      id,
      firstName,
      lastName,
      maidenName,
      age,
      gender,
      email,
      phone,
      username,
      password,
      birthDate,
      image,
      bloodGroup,
      height,
      weight,
      eyeColor,
      hair,
      domain,
      ip,
      address,
      macAddress,
      university,
      bank,
      company,
      ein,
      ssn,
      userAgent,
    );
  };
}
