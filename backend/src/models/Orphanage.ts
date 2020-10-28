import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'
import Image from './Image'

// Utilizar um decorator, usado em classes, propriedades ou funções, utilizando esse decorator
// automaticamente o typeorm já vai saber que essa classe está associada a nossa tabela

@Entity('orphanages')
export default class Orphanage {  // Classe do Javascript, nada a ver com banco de dados
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[];
}