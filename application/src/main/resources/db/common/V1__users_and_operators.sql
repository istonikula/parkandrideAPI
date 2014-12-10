create table operator (
  id bigint not null,
  name_fi varchar(255) not null,
  name_sv varchar(255) not null,
  name_en varchar(255) not null,

  primary key (id)
);

create table app_user (
  id bigint not null,
  username varchar(255) not null,
  role varchar(32) not null,
  operator_id bigint,

  secret varchar(128) not null,
  password varchar(128),

  primary key (id),

  constraint user_username_u unique (username),

  constraint user_operator_id_fk foreign key (operator_id)
    references operator (id)
);

create sequence user_id_seq increment by 1 start with 1;

insert into app_user (id, username, role, secret, password) values (nextval('user_id_seq'), 'admin', 'ADMIN', '10Nb3d7SZ6S46hIpz_TvTqNZDTA', 'x1X5yoLwDpZ1CG4iUagSgc4OQznA8Z5WAakRfCLmYMGLpBTwhQi+D5UaPDxd9YHP');
