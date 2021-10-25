package com.banhang.backend.DataBase;

// import com.banhang.backend.User.EntityU;
import com.banhang.backend.User.RepositoryU;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserDB {
    @Bean
    CommandLineRunner initDatabase(RepositoryU repository){

        // final Logger logger = LoggerFactory.getLogger(DBUser.class);
        return new CommandLineRunner(){
            @Override
            public void run(String ... args) throws Exception{
                // EntityU entity1 = new EntityU(1L, "Bui Quoc Toan", "BuiToan", "admin", "ROLE_ADMIN", "buitoan");
                // EntityU entity2 = new EntityU(2L, "Bui Viet Anh", "BuiAnh", "user", "ROLE_USER", "buianh");
                // EntityU entity3 = new EntityU(3L, "Bui Le Ngoc Anh", "AnhBui", "admin", "ROLE_ADMIN", "buity");
                // logger.info("insert data1: " + repository.save(entity1));
                // logger.info("insert data2: " + repository.save(entity2));
                // logger.info("insert data3: " + repository.save(entity3));
            }
        };
    }
}