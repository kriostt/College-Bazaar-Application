package com.Springbe.demo;

import com.Springbe.demo.model.bazaarUsr;
import com.Springbe.demo.repository.StudUsrRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbeApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbeApplication.class, args);
	}

	@Autowired
	private StudUsrRepo studUsrRepo;
	@Override
	public void run(String... args) throws Exception {
//		bazaarUsr bazaarusr = new bazaarUsr();
//		bazaarusr.setFname("Mary Cris");
//		bazaarusr.setLname("Pelias");
//		bazaarusr.setAddress("36 Erickson Drive");
//		bazaarusr.setZipcode("12 z128");
//		bazaarusr.setEmail("mcpelias18@gmail.com");
//		bazaarusr.setPhoneNumber("1231234-1333");
//		bazaarusr.setStudentId("00044323");
//		bazaarusr.setPassword("redDeer");
//		studUsrRepo.save(bazaarusr);
//
//		bazaarUsr bazaarusr2 = new bazaarUsr();
//		bazaarusr2.setFname("Jerome");
//		bazaarusr2.setLname("Aquino");
//		bazaarusr2.setAddress("36 Erickson Drive");
//		bazaarusr2.setZipcode("12 z128");
//		bazaarusr2.setEmail("rome@gmail.com");
//		bazaarusr2.setPhoneNumber("1231234-1333");
//		bazaarusr2.setStudentId("00044323");
//		bazaarusr2.setPassword("rdp143");
//		studUsrRepo.save(bazaarusr2);

	}
}
