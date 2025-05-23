PGDMP          
            }            reservacion_de_eventos    16.8 (Debian 16.8-1.pgdg120+1)    16.8 3    N           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            O           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            P           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Q           1262    16389    reservacion_de_eventos    DATABASE     �   CREATE DATABASE reservacion_de_eventos WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF8';
 &   DROP DATABASE reservacion_de_eventos;
                reservacion_de_eventos_user    false            R           0    0    reservacion_de_eventos    DATABASE PROPERTIES     ?   ALTER DATABASE reservacion_de_eventos SET "TimeZone" TO 'utc';
                     reservacion_de_eventos_user    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                reservacion_de_eventos_user    false            �            1259    16436    actividades    TABLE     �   CREATE TABLE public.actividades (
    id_actividad integer NOT NULL,
    id_evento integer,
    nombre character varying(100) NOT NULL,
    descripcion text,
    hora_inicio time without time zone NOT NULL,
    hora_fin time without time zone NOT NULL
);
    DROP TABLE public.actividades;
       public         heap    reservacion_de_eventos_user    false    5            �            1259    16435    actividades_id_actividad_seq    SEQUENCE     �   CREATE SEQUENCE public.actividades_id_actividad_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.actividades_id_actividad_seq;
       public          reservacion_de_eventos_user    false    222    5            S           0    0    actividades_id_actividad_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.actividades_id_actividad_seq OWNED BY public.actividades.id_actividad;
          public          reservacion_de_eventos_user    false    221            �            1259    16410    espacios    TABLE     �   CREATE TABLE public.espacios (
    id_espacio integer NOT NULL,
    nombre character varying(100) NOT NULL,
    ubicacion character varying(255),
    capacidad integer NOT NULL
);
    DROP TABLE public.espacios;
       public         heap    reservacion_de_eventos_user    false    5            �            1259    16409    espacios_id_espacio_seq    SEQUENCE     �   CREATE SEQUENCE public.espacios_id_espacio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.espacios_id_espacio_seq;
       public          reservacion_de_eventos_user    false    5    218            T           0    0    espacios_id_espacio_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.espacios_id_espacio_seq OWNED BY public.espacios.id_espacio;
          public          reservacion_de_eventos_user    false    217            �            1259    16417    eventos    TABLE     �   CREATE TABLE public.eventos (
    id_evento integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    fecha date NOT NULL,
    hora time without time zone NOT NULL,
    id_espacio integer,
    id_organizador integer
);
    DROP TABLE public.eventos;
       public         heap    reservacion_de_eventos_user    false    5            �            1259    16416    eventos_id_evento_seq    SEQUENCE     �   CREATE SEQUENCE public.eventos_id_evento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.eventos_id_evento_seq;
       public          reservacion_de_eventos_user    false    220    5            U           0    0    eventos_id_evento_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.eventos_id_evento_seq OWNED BY public.eventos.id_evento;
          public          reservacion_de_eventos_user    false    219            �            1259    16450    reservaciones    TABLE     �   CREATE TABLE public.reservaciones (
    id_reservacion integer NOT NULL,
    id_evento integer,
    id_asistente integer,
    fecha_reserva timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.reservaciones;
       public         heap    reservacion_de_eventos_user    false    5            �            1259    16449     reservaciones_id_reservacion_seq    SEQUENCE     �   CREATE SEQUENCE public.reservaciones_id_reservacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.reservaciones_id_reservacion_seq;
       public          reservacion_de_eventos_user    false    224    5            V           0    0     reservaciones_id_reservacion_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.reservaciones_id_reservacion_seq OWNED BY public.reservaciones.id_reservacion;
          public          reservacion_de_eventos_user    false    223            �            1259    16400    usuarios    TABLE     |  CREATE TABLE public.usuarios (
    id_usuario integer NOT NULL,
    nombre character varying(100) NOT NULL,
    correo character varying(100) NOT NULL,
    telefono character varying(20),
    tipo character varying(20) NOT NULL,
    CONSTRAINT usuarios_tipo_check CHECK (((tipo)::text = ANY ((ARRAY['Organizador'::character varying, 'Asistente'::character varying])::text[])))
);
    DROP TABLE public.usuarios;
       public         heap    reservacion_de_eventos_user    false    5            �            1259    16399    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          reservacion_de_eventos_user    false    216    5            W           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;
          public          reservacion_de_eventos_user    false    215            �           2604    16439    actividades id_actividad    DEFAULT     �   ALTER TABLE ONLY public.actividades ALTER COLUMN id_actividad SET DEFAULT nextval('public.actividades_id_actividad_seq'::regclass);
 G   ALTER TABLE public.actividades ALTER COLUMN id_actividad DROP DEFAULT;
       public          reservacion_de_eventos_user    false    221    222    222            �           2604    16413    espacios id_espacio    DEFAULT     z   ALTER TABLE ONLY public.espacios ALTER COLUMN id_espacio SET DEFAULT nextval('public.espacios_id_espacio_seq'::regclass);
 B   ALTER TABLE public.espacios ALTER COLUMN id_espacio DROP DEFAULT;
       public          reservacion_de_eventos_user    false    217    218    218            �           2604    16420    eventos id_evento    DEFAULT     v   ALTER TABLE ONLY public.eventos ALTER COLUMN id_evento SET DEFAULT nextval('public.eventos_id_evento_seq'::regclass);
 @   ALTER TABLE public.eventos ALTER COLUMN id_evento DROP DEFAULT;
       public          reservacion_de_eventos_user    false    220    219    220            �           2604    16453    reservaciones id_reservacion    DEFAULT     �   ALTER TABLE ONLY public.reservaciones ALTER COLUMN id_reservacion SET DEFAULT nextval('public.reservaciones_id_reservacion_seq'::regclass);
 K   ALTER TABLE public.reservaciones ALTER COLUMN id_reservacion DROP DEFAULT;
       public          reservacion_de_eventos_user    false    224    223    224            �           2604    16403    usuarios id_usuario    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN id_usuario DROP DEFAULT;
       public          reservacion_de_eventos_user    false    215    216    216            I          0    16436    actividades 
   TABLE DATA           j   COPY public.actividades (id_actividad, id_evento, nombre, descripcion, hora_inicio, hora_fin) FROM stdin;
    public          reservacion_de_eventos_user    false    222   �@       E          0    16410    espacios 
   TABLE DATA           L   COPY public.espacios (id_espacio, nombre, ubicacion, capacidad) FROM stdin;
    public          reservacion_de_eventos_user    false    218   ZA       G          0    16417    eventos 
   TABLE DATA           j   COPY public.eventos (id_evento, nombre, descripcion, fecha, hora, id_espacio, id_organizador) FROM stdin;
    public          reservacion_de_eventos_user    false    220   �A       K          0    16450    reservaciones 
   TABLE DATA           _   COPY public.reservaciones (id_reservacion, id_evento, id_asistente, fecha_reserva) FROM stdin;
    public          reservacion_de_eventos_user    false    224   uB       C          0    16400    usuarios 
   TABLE DATA           N   COPY public.usuarios (id_usuario, nombre, correo, telefono, tipo) FROM stdin;
    public          reservacion_de_eventos_user    false    216   �B       X           0    0    actividades_id_actividad_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.actividades_id_actividad_seq', 1, false);
          public          reservacion_de_eventos_user    false    221            Y           0    0    espacios_id_espacio_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.espacios_id_espacio_seq', 1, false);
          public          reservacion_de_eventos_user    false    217            Z           0    0    eventos_id_evento_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.eventos_id_evento_seq', 1, false);
          public          reservacion_de_eventos_user    false    219            [           0    0     reservaciones_id_reservacion_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.reservaciones_id_reservacion_seq', 1, false);
          public          reservacion_de_eventos_user    false    223            \           0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 1, false);
          public          reservacion_de_eventos_user    false    215            �           2606    16443    actividades actividades_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.actividades
    ADD CONSTRAINT actividades_pkey PRIMARY KEY (id_actividad);
 F   ALTER TABLE ONLY public.actividades DROP CONSTRAINT actividades_pkey;
       public            reservacion_de_eventos_user    false    222            �           2606    16415    espacios espacios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.espacios
    ADD CONSTRAINT espacios_pkey PRIMARY KEY (id_espacio);
 @   ALTER TABLE ONLY public.espacios DROP CONSTRAINT espacios_pkey;
       public            reservacion_de_eventos_user    false    218            �           2606    16424    eventos eventos_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id_evento);
 >   ALTER TABLE ONLY public.eventos DROP CONSTRAINT eventos_pkey;
       public            reservacion_de_eventos_user    false    220            �           2606    16456     reservaciones reservaciones_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.reservaciones
    ADD CONSTRAINT reservaciones_pkey PRIMARY KEY (id_reservacion);
 J   ALTER TABLE ONLY public.reservaciones DROP CONSTRAINT reservaciones_pkey;
       public            reservacion_de_eventos_user    false    224            �           2606    16408    usuarios usuarios_correo_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_correo_key UNIQUE (correo);
 F   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_correo_key;
       public            reservacion_de_eventos_user    false    216            �           2606    16406    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            reservacion_de_eventos_user    false    216            �           2606    16444 &   actividades actividades_id_evento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.actividades
    ADD CONSTRAINT actividades_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id_evento) ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.actividades DROP CONSTRAINT actividades_id_evento_fkey;
       public          reservacion_de_eventos_user    false    222    220    3241            �           2606    16425    eventos eventos_id_espacio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_id_espacio_fkey FOREIGN KEY (id_espacio) REFERENCES public.espacios(id_espacio) ON DELETE SET NULL;
 I   ALTER TABLE ONLY public.eventos DROP CONSTRAINT eventos_id_espacio_fkey;
       public          reservacion_de_eventos_user    false    3239    218    220            �           2606    16430 #   eventos eventos_id_organizador_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_id_organizador_fkey FOREIGN KEY (id_organizador) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.eventos DROP CONSTRAINT eventos_id_organizador_fkey;
       public          reservacion_de_eventos_user    false    220    216    3237            �           2606    16462 -   reservaciones reservaciones_id_asistente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reservaciones
    ADD CONSTRAINT reservaciones_id_asistente_fkey FOREIGN KEY (id_asistente) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 W   ALTER TABLE ONLY public.reservaciones DROP CONSTRAINT reservaciones_id_asistente_fkey;
       public          reservacion_de_eventos_user    false    216    224    3237            �           2606    16457 *   reservaciones reservaciones_id_evento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reservaciones
    ADD CONSTRAINT reservaciones_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id_evento) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.reservaciones DROP CONSTRAINT reservaciones_id_evento_fkey;
       public          reservacion_de_eventos_user    false    3241    224    220                       826    16391     DEFAULT PRIVILEGES FOR SEQUENCES    DEFAULT ACL     b   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO reservacion_de_eventos_user;
                   postgres    false                       826    16393    DEFAULT PRIVILEGES FOR TYPES    DEFAULT ACL     ^   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO reservacion_de_eventos_user;
                   postgres    false                       826    16392     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     b   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO reservacion_de_eventos_user;
                   postgres    false            
           826    16390    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     _   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES TO reservacion_de_eventos_user;
                   postgres    false            I   �   x�5�1
�@E��S�	$�t"V�Zڌ�D��0��V�r1����σ��L	S��~���(tY��h;ƙ��Y�ơB�,��M�WMU�7�R\5�I��\��q�S,0'8Y�V�O({K���7%��������^ܗ�s�*_:�      E   _   x��;
�0 �9=EN m��\]������u~/@~��ݤc�v)�w�Ť�r�b�#$�]����2��6��.(�ʸ���J&�S�!��s���      G   �   x�M�A
�0�����@%I�b��ҕ[7c:�f��\y�^�V�Y<���CT��DF;�e5c�p��Lz-d+Eѻ���vMEy~	��m߁���-�	p�̂�u�OXnTY�Z�Rb�lց�,c)�'�x�һ�/����5��1��<�      K   ,   x�3�4�4�4202�50�52P00�26�20�2�4�!���� 	m      C   �   x�3��*M�S8��(��3��+H2Rs3s���s9��ML��-,9����2�S򋸌8}��MTp?�9�57�(3Q/=?E���������!�cqfqIj^I*�1�sbQN~�BPifg2��Wd#�Z���=... V�;
     