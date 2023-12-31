﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ReservaHotel.Data;

#nullable disable

namespace ReservaHotel.Migrations
{
    [DbContext(typeof(BDContext))]
    partial class BDContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("PacoteServico", b =>
                {
                    b.Property<int>("PacotesIdPacote")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ServicosIdServico")
                        .HasColumnType("INTEGER");

                    b.HasKey("PacotesIdPacote", "ServicosIdServico");

                    b.HasIndex("ServicosIdServico");

                    b.ToTable("PacoteServico");
                });

            modelBuilder.Entity("ReservaHotel.Models.Cliente", b =>
                {
                    b.Property<string>("Cpf")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Cpf");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("ReservaHotel.Models.Hotel", b =>
                {
                    b.Property<int>("IdHotel")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Cidade")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("NumQuartos")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Pais")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Rating")
                        .HasColumnType("INTEGER");

                    b.HasKey("IdHotel");

                    b.ToTable("Hotels");
                });

            modelBuilder.Entity("ReservaHotel.Models.Pacote", b =>
                {
                    b.Property<int>("IdPacote")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<float>("ValorPacote")
                        .HasColumnType("REAL");

                    b.HasKey("IdPacote");

                    b.ToTable("Pacotes");
                });

            modelBuilder.Entity("ReservaHotel.Models.Pagamento", b =>
                {
                    b.Property<int>("IdPagamento")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("MetodoPagamento")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ReservaIdReserva")
                        .HasColumnType("INTEGER");

                    b.Property<float>("Valor")
                        .HasColumnType("REAL");

                    b.HasKey("IdPagamento");

                    b.HasIndex("ReservaIdReserva");

                    b.ToTable("Pagamentos");
                });

            modelBuilder.Entity("ReservaHotel.Models.Premio", b =>
                {
                    b.Property<int>("IdPremio")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("IdPremio");

                    b.ToTable("Premios");
                });

            modelBuilder.Entity("ReservaHotel.Models.Quarto", b =>
                {
                    b.Property<int>("NroQuarto")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("NroHospedes")
                        .HasColumnType("INTEGER");

                    b.Property<float>("Valor")
                        .HasColumnType("REAL");

                    b.HasKey("NroQuarto");

                    b.ToTable("Quartos");
                });

            modelBuilder.Entity("ReservaHotel.Models.Recibo", b =>
                {
                    b.Property<int>("IdRecibo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("PagamentoIdPagamento")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PremioIdPremio")
                        .HasColumnType("INTEGER");

                    b.HasKey("IdRecibo");

                    b.HasIndex("PagamentoIdPagamento");

                    b.HasIndex("PremioIdPremio");

                    b.ToTable("Recibos");
                });

            modelBuilder.Entity("ReservaHotel.Models.Reserva", b =>
                {
                    b.Property<int>("IdReserva")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClienteCpf")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("DataCheckIn")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("DataCheckOut")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("DataReserva")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("HotelIdHotel")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PacoteIdPacote")
                        .HasColumnType("INTEGER");

                    b.Property<int>("QuartoNroQuarto")
                        .HasColumnType("INTEGER");

                    b.Property<float>("ValorReserva")
                        .HasColumnType("REAL");

                    b.Property<int>("VoucherIdVoucher")
                        .HasColumnType("INTEGER");

                    b.HasKey("IdReserva");

                    b.HasIndex("ClienteCpf");

                    b.HasIndex("HotelIdHotel");

                    b.HasIndex("PacoteIdPacote");

                    b.HasIndex("QuartoNroQuarto");

                    b.HasIndex("VoucherIdVoucher");

                    b.ToTable("Reservas");
                });

            modelBuilder.Entity("ReservaHotel.Models.Servico", b =>
                {
                    b.Property<int>("IdServico")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<float>("ValorServico")
                        .HasColumnType("REAL");

                    b.HasKey("IdServico");

                    b.ToTable("Servicos");
                });

            modelBuilder.Entity("ReservaHotel.Models.Voucher", b =>
                {
                    b.Property<int>("IdVoucher")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<float>("Desconto")
                        .HasColumnType("REAL");

                    b.HasKey("IdVoucher");

                    b.ToTable("Vouchers");
                });

            modelBuilder.Entity("PacoteServico", b =>
                {
                    b.HasOne("ReservaHotel.Models.Pacote", null)
                        .WithMany()
                        .HasForeignKey("PacotesIdPacote")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ReservaHotel.Models.Servico", null)
                        .WithMany()
                        .HasForeignKey("ServicosIdServico")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ReservaHotel.Models.Pagamento", b =>
                {
                    b.HasOne("ReservaHotel.Models.Reserva", "Reserva")
                        .WithMany()
                        .HasForeignKey("ReservaIdReserva")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Reserva");
                });

            modelBuilder.Entity("ReservaHotel.Models.Recibo", b =>
                {
                    b.HasOne("ReservaHotel.Models.Pagamento", "Pagamento")
                        .WithMany()
                        .HasForeignKey("PagamentoIdPagamento")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ReservaHotel.Models.Premio", "Premio")
                        .WithMany()
                        .HasForeignKey("PremioIdPremio")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pagamento");

                    b.Navigation("Premio");
                });

            modelBuilder.Entity("ReservaHotel.Models.Reserva", b =>
                {
                    b.HasOne("ReservaHotel.Models.Cliente", "Cliente")
                        .WithMany()
                        .HasForeignKey("ClienteCpf")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ReservaHotel.Models.Hotel", "Hotel")
                        .WithMany()
                        .HasForeignKey("HotelIdHotel")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ReservaHotel.Models.Pacote", "Pacote")
                        .WithMany()
                        .HasForeignKey("PacoteIdPacote")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ReservaHotel.Models.Quarto", "Quarto")
                        .WithMany()
                        .HasForeignKey("QuartoNroQuarto")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ReservaHotel.Models.Voucher", "Voucher")
                        .WithMany()
                        .HasForeignKey("VoucherIdVoucher")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");

                    b.Navigation("Hotel");

                    b.Navigation("Pacote");

                    b.Navigation("Quarto");

                    b.Navigation("Voucher");
                });
#pragma warning restore 612, 618
        }
    }
}
