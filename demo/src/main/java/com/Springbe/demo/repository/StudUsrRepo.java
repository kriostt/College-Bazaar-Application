package com.Springbe.demo.repository;

import com.Springbe.demo.model.bazaarUsr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface StudUsrRepo extends JpaRepository<bazaarUsr,Long>
{
        //all crud database methods
        Optional<bazaarUsr> findByStudentId(String studentId);
}
