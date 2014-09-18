package fi.hsl.parkandride.config;

import javax.inject.Inject;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.mysema.query.sql.postgres.PostgresQueryFactory;

import fi.hsl.parkandride.core.outbound.FacilityRepository;
import fi.hsl.parkandride.outbound.FacilityDao;

@Configuration
@Import(JdbcConfiguration.class)
@EnableTransactionManagement
public class CoreConfiguration {

    @Inject PostgresQueryFactory queryFactory;

    @Bean
    public FacilityRepository facilityRepository() {
        return new FacilityDao(queryFactory);
    }

}