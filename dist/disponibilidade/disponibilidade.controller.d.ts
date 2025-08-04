import { DisponibilidadeService } from './disponibilidade.service';
import { FindDisponibilidadeDto } from './dto/find-disponibilidade.dto';
export declare class DisponibilidadeController {
    private readonly disponibilidadeService;
    constructor(disponibilidadeService: DisponibilidadeService);
    findDisponibilidadeReal(findDisponibilidadeDto: FindDisponibilidadeDto): Promise<any[]>;
}
